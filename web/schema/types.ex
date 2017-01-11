defmodule Sconely.Schema.Types do
  use Absinthe.Schema.Notation

  #object :menu_item do
  #  field :item_id, :string
  #  field :title, :string
  #  field :description, :string
  #end
 
  object :sconely_signature_order do
    field :order_id, :string
    field :host_id, :string
    field :event_name, :string
    field :event_datetime, :string
    field :status, :string
  end

  #object :sconely_order do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end



  #object :sconely_yours_order do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  #object :sconely_yours_order_items do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_datetime, :string
  #end

  object :sconely_signature_order_event_details do
    field :order_id, :string
    field :host_id, :string
    field :event_name, :string
    field :event_date, :string
  	field :event_time, :string
  	field :guest_count, :string
  	field :code, :string
  end

  object :sconely_signature_order_additional_items do
    field :items, :menu_item
  end

  #object :sconely_social_order do
  #  field :order_id, :string
  #  field :host_id, :string
  #  field :event_name, :string
  #  field :event_date, :string
  #	 field :event_time, :string
  #  field :delivery_address, :string
  #	 field :items, :string
  #end


  #object :items do
  #  field :item_id, :string
  #  field :title, :string
  #  field :description, :string
  
  #end


  input_object :update_order_params do
	field :event_name, (:string)
  end

  input_object :menu_item do
  	field :order_id, (:string)
	field :item_id, (:string)
	field :quantity, (:string)
  end

end