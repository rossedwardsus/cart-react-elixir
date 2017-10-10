defmodule Sconely.OrderSession do
		use Ecto.Schema
		import Ecto.Changeset

		#use SconeHomeElixir.Web, :model

		@primary_key {:session_id, :binary_id, autogenerate: true}

		@optional_fields ~W(order_type screen order_started_datetime order_completed_datetime)
		@required_fields ~W()

		schema "order_sessions" do
			#field :session_id, Ecto.UUID
			field :order_type, :string #integer
			#order_id
			field :order_started_datetime, Ecto.DateTime
			field :screen, :string
			field :order_completed_datetime, Ecto.DateTime

		end


		def changeset(model, params \\ %{}) do
		    model
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required(params, [:user_id])
		end

end 