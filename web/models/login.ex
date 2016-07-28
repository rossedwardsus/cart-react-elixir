defmodule SconeHomeElixir.Login do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "registration" do
			field :user_id, Ecto.UUID
			field :email, :string
			field :password, :string
			
			#timestamps()
		end


end 