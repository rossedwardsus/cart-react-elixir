defmodule SconeHomeElixir.DailyLog do
  use GenServer
  #use SconeHomeElixir.Web, :controller
  import Ecto.Query

  alias Sconely.BrowserLog
  #alias SconeHomeElixir.Repo

  def start_link do
    GenServer.start_link(__MODULE__, %{})
  end

  def init(state) do
    IO.puts "hello from worker"

    schedule_work() # Schedule work to be performed at some point
    {:ok, state}
  end

  def handle_info(:work, state) do
    # Do the work you desire here
    IO.puts "hello from worker"

    #changeset = UserProfileDeliveryAddress.changeset(%UserProfileDeliveryAddress{}, %{question_id: "1", created_by: "1", title: "title"})

     # case Repo.insert(changeset) do
     #   {:ok, _user} ->
     #     conn
     #       |> IO.puts "inserted"
    #      |> put_flash(:info, "User created successfully.")
    #      |> redirect(to: user_path(conn, :index))
    #    {:error, changeset} ->
    #      render(conn, "new.html", changeset: changeset)
    #  end

    #send messages to guests that havent chosen their item if it is a timeframe before the delivery date

    #query = from log in BrowserLog,
    #     select: %{id: w.id}
    #get the logs for today
    #Ecto.Date.utc()

    #logs = Repo.all(query)

    #Enum.map(all_ids, fn(x) -> IO.inspect x[:id] end)
    
    #IO.puts ""

    schedule_work() # Reschedule once more
    {:noreply, state}
  end

  defp schedule_work() do
    #IO.puts "schedule worker"

    #86,400,000
    #Process.send_after(self(), :work, 10000) # In 1 hour
  end
end