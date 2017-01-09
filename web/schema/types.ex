defmodule Sconely.Schema.Types do
  use Absinthe.Schema.Notation
 
  object :sconely_signature_order do
    field :order_id, :string
    field :host_id, :string
    field :event_name, :string
    field :event_datetime, :string
  end

  #object :sconely_user do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  #object :sconely_registration do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  input_object :update_order_params do
	field :event_name, (:string)
  end

end