defmodule SconeHomeElixir.MenuItem do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "meni_items" do
			field :user_id, Ecto.UUID
			field :email, :string
			field :password, :string
			
			#timestamps()
		end


end 