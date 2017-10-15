defmodule Sconely.MenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "menu_items" do
			field :menu_item_id, :integer
			field :name, :string
			field :description, :string
			field :ingredients, :string
			field :assortment, :boolean
			field :active, :boolean
			field :order, :integer
			
			#timestamps()
		end

end 