defmodule Sconely.OrderLog do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@primary_key {:session_id, :binary_id, autogenerate: true}

		@optional_fields ~W(order_type screen order_started_datetime order_completed_datetime)
		@required_fields ~W()


		schema "order" do
			field :order, :map
			field :order_datetime, Ecto.DateTime
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
	    end


end 