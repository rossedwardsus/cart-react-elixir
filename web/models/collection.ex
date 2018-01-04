defmodule Sconely.Collection do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@optional_fields ~W(title description)
		@required_fields ~W()

		@primary_key {:id, :binary_id, autogenerate: true}

		schema "collections" do
			field :title, :string
			field :description, :string
			field :active, :boolean
			
			#timestamps()
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		end

end 