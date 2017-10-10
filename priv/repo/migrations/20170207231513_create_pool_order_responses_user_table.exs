defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrderResponsesTable do
  use Ecto.Migration

  def change do
    create_if_not_exists table(:pool_order_responses) do
      add :user_id, :uuid
      add :parent_order_id, :uuid
  	  add :admin_receipt_pool_order_id, :bigint #yours, social, pool
      #add :delivery_contact_address_id, :smallint
      add :admin_receipt_order_id, :bigint
      add :payment_method_id, :smallint
      #delivery note
      add :order_datetime, :datetime
      add :stripe_token, :string, size: 30
      
      #add :status, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
