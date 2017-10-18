defmodule SconeHomeElixir.Repo.Migrations.CreatePoolOrderResponsesTable do
  use Ecto.Migration

  def up do
    create_if_not_exists table(:pool_order_responses, primary_key: false) do
      add :id, uuid, primary_key: true
      add :user_id, :uuid
      add :parent_order_id, :uuid
  	  add :pool_parent_order_id, :uuid
      add :admin_receipt_order_id, :bigint
      add :user_payment_method_id, :smallint
      #add :order_datetime, :datetime
      add :stripe_charge_token, :string, size: 30
      
      #add :status, :string
      
      #create index(:posts, [:slug], concurrently: true)
    end

  end
end
