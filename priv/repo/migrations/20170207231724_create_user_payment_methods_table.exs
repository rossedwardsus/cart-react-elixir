defmodule SconeHomeElixir.Repo.Migrations.CreateUserPaymentMethodsTable do
  use Ecto.Migration

  def change do
  	  create_if_not_exists table(:user_payment_methods) do
	      add :user_id, :bigint #uuid or "guest"
	      add :payment_method_id, :integer
	      add :last_four_digits, :string
	      add :stripe_payment_token, :string
	      
	      #create index(:posts, [:slug], concurrently: true)
	  end
  end
end
