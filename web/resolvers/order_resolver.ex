defmodule SconeHomeElixir.OrderResolver do
  alias SconeHomeElixir.Repo
  alias Sconely.SconelySignatureOrder

  import Ecto.Query

  def get_order(%{order_id: order_id}, _info) do
    #{:ok, Enum.map(Repo.get_by!(SconelySignatureOrder, order_id: order_id), &order_json/1)}
    #{:ok, %{eventName: "event"}}
    case Repo.get(SconelySignatureOrder, order_id) do
      nil -> {:error, "No order found with order_id #{order_id}"}
      #order -> Task.start_link(fn -> IO.puts "Hello, World" end); {:ok, order}
        #Task.start_link(fn -> IO.puts "Hello, World" end)
        #Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end)
      order -> Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end); 
               {:ok, order}
      

    #case order do
    #    1 -> Task.start_link(fn -> IO.puts "Hello, World" end);
    #Task.start_link(fn -> Sconely.SconelySignatureOrderProcessedEmail.welcome_email(%{"address" => "santa monica"}) |> SconeHomeElixir.Mailer.deliver_now end)
    #end
    
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

  def user_orders(%{host_id: host_id}, _info) do
    IO.puts("user orders");
    query = from o in SconelySignatureOrder, where: o.host_id == ^host_id
    orders = Repo.all(query)
    {:ok, orders}
    #{:ok, [%{event_name: "hello"}]}
  end
  
  def all(_args, _info) do
    {:ok, Repo.all(SconelySignatureOrder)}
    #{:ok, [%{order_id: 1, event_name: "hello", body: "there"}]}
  end


  def create_order(args, _info) do
  	IO.puts("create order graphql")
    IO.inspect(args)

    #if order_type == "yours", "social", "signature"

	  %SconelySignatureOrder{}
	  |> SconelySignatureOrder.changeset(args)
	  |> Repo.insert
  end

  def auto_save(%{order_id: order_id, order: order_params}, _info) do
    Repo.get!(SconelySignatureOrder, order_id)
    |> SconelySignatureOrder.changeset(order_params)
    |> Repo.update
  end


  #order completed
  #update profile
  #guest chooses scone
  #login
  #register
  #order code
  #menu
  #payment



end