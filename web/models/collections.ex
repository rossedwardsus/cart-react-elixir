defmodule Sconely.Collection do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(menu_item_id name description ingredients assortment active order)
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "collections" do
			field :name, :string
			field :url_name, :string
			field :description, :string
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		end

end 