defmodule Sconely.BrowserAnalytics do
		#use Ecto.Schema
		#import Ecto.Changeset

		use SconeHomeElixir.Web, :model

		#@derive {Poison.Encoder, only: [:user_id, :email, :password]}

		@optional_fields ~W(data)
		@required_fields ~W()

		schema "browser_analytics" do
			field :data, :string
			field :datetime_logged, Ecto.DateTime, default: Ecto.DateTime.utc
		end

		def changeset(struct, params \\ %{}) do
		    struct
		    |> cast(params, @required_fields, @optional_fields)
		    #|> validate_required([:email, :password])
		    #|> validate_length(:first_name, min: 2)
		    #|> validate_length(:email, min: 2)
		end

end 