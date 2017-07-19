defmodule SconeHomeElixir.Repo.Migrations.CreateUserPaymentMethodsTable do
  use Ecto.Migration

  def change do
  	  create table(:user_payment_methods) do
      add :user_id, :string #uuid or "guest"
      add :stripe_payment_token, :string
      add :name, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end
end
