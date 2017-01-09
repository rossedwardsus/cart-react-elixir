defmodule Sconely.User do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		schema "users" do
			field :user_id, :string
			field :first_name, :string
			field :last_name, :string
			field :about_me, :string, default: ""
			field :email, :string
			field :mobile, :string, default: ""
			field :company_name, :string, default: ""
			field :delivery_address_street, :string, default: ""
			field :delivery_address_city, :string, default: ""
			field :delivery_address_state, :string, default: ""
			field :delivery_address_zipcode, :string, default: ""
			field :delivery_address_comment, :string, default: ""
			
			
			#timestamps()
		end


		#has_many_orders

end 