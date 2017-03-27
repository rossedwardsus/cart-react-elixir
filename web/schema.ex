defmodule SconeHomeElixir.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 


  query do

  	field :login, :login do
      resolve &Sconely.LoginResolver.login/2
    end


    #field :get_user_delivery_addresses, list_of(:sconely_signature_order) do
    #  resolve &Sconely.OrderResolver.all/2
    #end

    #field :get_user_payment_methods, type: :sconely_signature_order do
    #    arg :order_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.get_order/2
    #end




    #field :user_orders, list_of(:sconely_signature_order) do
    #    arg :host_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.user_orders/2
    #end
  end

  #input_object :update_order_params do
	#field :event_name, (:string)
  #end








  mutation do



  	#field :register, type: :registration do
    	#arg :email, (:string)
    	#arg :mobile, (:string)
    	#arg :delivery_address_city, (:string)
    	#arg :order_items, list_of(:menu_item_input)
    		
    	#resolve &Sconely.SconelySocialOrderResolver.create_order/2
  	#end


  	#field :create_user, type: :registration do
    #	arg :host_id, (:string)
    	#arg :email
       	#arg :mobile
       	#arg :password
    	#arg :new_payment
    	#arg :cart
    		
    #	resolve &Sconely.OrderResolver.create/2
  	#end





	field :save_sconely_signature_order_event_details, type: :sconely_signature_order_event_details do
	    arg :order_id, non_null(:string)
	    arg :event_name, :string
	    arg :event_date, :string
	    arg :event_time, :string
	 
	    resolve &Sconely.OrderResolver.save_sconely_signature_order_event_details/2
	end


	#field :save_sconely_signature_order_additional_items, type: :sconely_signature_order_additional_items do
	#    arg :order_id, non_null(:string)
	#    arg :items, list_of(:menu_item)
	#    #arg :quantity, :string
	 
	#    resolve &Sconely.OrderResolver.save_sconely_signature_order_additional_items/2
	#end


	field :complete_sconely_signature_order, type: :sconely_signature_order do
	    arg :order_id, :string
	    arg :amount, :integer
	 
	    resolve &Sconely.OrderResolver.complete_sconely_signature_order/2
	end
  end
end