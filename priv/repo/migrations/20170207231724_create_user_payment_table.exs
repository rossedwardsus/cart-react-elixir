defmodule SconeHomeElixir.Repo.Migrations.CreateUserPaymentMethodsTable do
  use Ecto.Migration

  def change do
  	  create table(:user_payment) do
      add :user_id, :string #uuid or "guest"
      add :order_id, :uuid
  	  add :order_type, :string
      #delivery address
      #delivery datetime
      add :created_at, :datetime
      add :payment_confirmation, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end
end
