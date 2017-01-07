defmodule Sconely.User do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "users" do
			field :user_id, :string
			field :first_name, :string
			field :last_name, :string
			field :about_me, :string
			
			#timestamps()
		end


end 