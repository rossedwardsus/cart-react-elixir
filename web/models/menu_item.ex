defmodule Sconely.MenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "menu_items" do
			#field :item_id, Ecto.UUID
			field :name, :string
			field :description, :string
			field :ingredients, :string
			#field :cost, :string
			
			#timestamps()
		end

end 