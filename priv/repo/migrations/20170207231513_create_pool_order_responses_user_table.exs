defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrderResponsesTable do
  use Ecto.Migration

  def change do
    create table(:pool_order_responses) do
      add :user_id, :integer
      add :order_id, :integer
  	  add :admin_receipt_pool_order_id, :integer #yours, social, pool
      #add :delivery_contact_address_id, Ecto.UUID
      add :admin_receipt_order_id, bigint

      #add :payment_method_id, Ecto.UUID
      
      #delivery note
      add :order_datetime, :datetime
      add :stripe_token, :string
      
      #add :status, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
