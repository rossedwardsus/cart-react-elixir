defmodule SconeHomeElixir.OrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder

  def get_order(%{order_id: order_id}, _info) do
    #{:ok, Enum.map(Repo.get_by!(SconelySignatureOrder, order_id: order_id), &order_json/1)}
    #{:ok, %{eventName: "event"}}
    case Repo.get(SconelySignatureOrder, order_id) do
      nil -> {:error, "No order found with order_id #{order_id}"}
      order -> {:ok, order}
      Task.start_link(fn -> IO.puts "Hello, World" end)
      Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now
    end
  end

  def order_json(order) do
    %{
      order_id: "order.order_id",
      host_id: "order.host_id",
      event_name: "order.event_name",
      created_at: "order.created_at",
    }
  end

  
  def all(_args, _info) do
    #{:ok, Blog.Repo.all(Post)}
    {:ok, [%{id: 1, title: "hello", body: "there"}]}
  end


  def create(args, _info) do
  	IO.puts("create order graphql")
	  %SconelySignatureOrder{}
	  |> SconelySignatureOrder.changeset(args)
	  |> Repo.insert
  end

  def update(%{order_id: order_id, order: order_params}, _info) do
    Repo.get!(SconelySignatureOrder, order_id)
    |> SconelySignatureOrder.changeset(order_params)
    |> Repo.update
  end

end