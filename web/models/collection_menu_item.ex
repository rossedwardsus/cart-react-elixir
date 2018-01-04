defmodule Sconely.CollectionMenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(menu_item_id )
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "collection_items" do
			field :collection_id, :string
			field :menu_item_id, :string
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		end

end 