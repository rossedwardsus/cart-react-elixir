defmodule Sconely.MenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(menu_item_id name description ingredients assortment active order)
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "menu_items" do
			field :menu_item_id, :integer
			field :name, :string
			field :collection_name, :string
			field :description, :string
			field :collection_description, :string
			field :ingredients, :string
			field :assortment, :boolean
			field :active, :boolean
			field :order, :integer
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		end

end 