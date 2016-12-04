defmodule Sconely.Session do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "sessions" do
			field :session_id, Ecto.UUID
			field :user_id, :string
			field :logged_in_datetime :string
			
			#timestamps()
		end

end 