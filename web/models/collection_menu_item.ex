defmodule Sconely.CollectionMenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(item_id )
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "collection_items" do
			field :collection_id, Ecto.UUID
			field :item_id, Ecto.UUID
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		end

end 