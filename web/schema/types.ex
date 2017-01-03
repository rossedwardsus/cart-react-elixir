defmodule SconeHomeElixir.Schema.Types do
  use Absinthe.Schema.Notation
 
  object :sconely_signature_order do
    field :order_id, :integer
    field :event_name, :string
    
  end
end