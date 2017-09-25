defmodule SconeHomeElixir.Repo.Migrations.CreateUserPaymentMethodsTable do
  use Ecto.Migration

  def change do
  	  create table(:user_payment_methods) do
	      add :user_id, :integer #uuid or "guest"
	      add :payment_method_id, :integer
	      add :stripe_payment_token, :string
	      add :last_four_digits, :string
	      
	      #create index(:posts, [:slug], concurrently: true)
	  end
  end
end
