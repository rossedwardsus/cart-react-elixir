defmodule SconeHomeElixir.Repo.Migrations.CreateUserPaymentMethodsTable do
  use Ecto.Migration

  def change do
  	  create_if_not_exists table(:user_payment_methods) do
	      add :user_id, :bigint #uuid or "guest"
	      add :payment_method_id, :smallint
	      add :last_four_digits, :string, size: 5
	      add :stripe_payment_token, :string, size: 30
	      
	      #create index(:posts, [:slug], concurrently: true)
	  end
  end
end
