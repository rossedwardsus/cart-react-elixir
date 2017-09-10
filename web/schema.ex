defmodule Sconely.Schema do
  use Absinthe.Schema
  import_types Sconely.Schema.Types
 


  query do

  	field :login_user, :login do
  	  arg :email, :string
  	  arg :password, :string
      resolve &Sconely.LoginResolver.login/2
    end


    field :get_user, :user do
      arg :user_id, :string
      #arg :email, :string
      #arg :password, :string
      resolve &Sconely.UserResolver.get_user/2
    end


    field :load_signature_guest_response_order_details, type: :signature_guest_response_order_details do
        arg :event_url_name, :string
      
        resolve &Sconely.SignatureOrderGuestResponseResolver.get_order/2
    end



    field :get_menu_items, list_of(:menu_item) do
      resolve &Sconely.MenuItemsResolver.getMenuItems/2
    end

    #field :get_user_payment_methods, type: :sconely_signature_order do
    #    arg :order_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.get_order/2
    #end

    field :get_user_order, type: :order do

      resolve &Sconely.SconelySignatureOrderResolver.get/2
  
    end


    #field :user_orders, list_of(:sconely_signature_order) do
    #    arg :host_id, non_null(:string)
	    
    #    resolve &Sconely.OrderResolver.user_orders/2
    #end


    #input_object :update_order_params do
    #field :event_name, (:string)
    #end

    field :get_sconely_signature_order, type: :sconely_signature_order do
        arg :order_id, :string
        #arg :event_name, :string
        #arg :code, :string
        #arg :guest_count, :string
        #arg :delivery_date, :string
        #arg :delivery_time, :string
     
        resolve &Sconely.SconelySignatureOrderResolver.get/2
    end

    field :get_pool_order_details, type: :pool_order_details do
        #arg :order_id, :string
        arg :pool_name, :string
        arg :pool_date, :string
        arg :cart_items, list_of(:item)
        #arg :guest_count, :string
        #arg :delivery_date, :string
        #arg :delivery_time, :string
     
        resolve &Sconely.YoursSocialPoolOrderResolver.get_pool_order_details/2
    end



    #field :get_sconely_signature_order_details, type: :sconely_signature_order_details do
    #    arg :order_id, :string
     
    #    #resolve &Sconely.SconelySignatureOrderResolver.get_order_details/2
    #end

    

    #field :get_sconely_signature_order_delivery_contact, type: :sconely_signature_order_delivery_contact do
    #    arg :order_id, :string
       
    #    resolve &Sconely.SconelySignatureOrderResolver.get_order_delivery_contact/2
    #end

    #field :get_sconely_signature_order_delivery_address, type: :sconely_signature_order_delivery_address do
    #    arg :order_id, :string
       
    #    resolve &Sconely.SconelySignatureOrderResolver.get_order_delivery_address/2
    #end

     field :get_sconely_signature_order_guest_responses, list_of(:sconely_signature_order_guest_response) do
        arg :order_id, :string
       
        resolve &Sconely.SconelySignatureOrderResolver.get_order_guest_responses/2
     end

     #field :get_sconely_signature_order_suborders, list_of(:sconely_signature_order_suborder) do
     #   arg :order_id, :string
       
    #    resolve &Sconely.SconelySignatureOrderResolver.get_order_suborders/2
     #end

  end



  mutation do



  	field :register, type: :registration do
      arg :first_name, (:string)
      arg :last_name, (:string)
    	arg :email, non_null(:string)
    	arg :mobile, (:string)
    	arg :password, (:string)

    	resolve &Sconely.RegistrationResolver.create_user/2
  	end


    #user

    field :save_user_profile, type: :registration do
      arg :first, (:string)
      arg :last, (:string)
      arg :email, non_null(:string)
      arg :mobile, (:string)
      arg :password, (:string)

      resolve &Sconely.RegistrationResolver.create_user/2
    end

    field :add_user_delivery_contact_address, type: :registration do
      arg :user_id, :string
      arg :delivery_contact_address_name, :string
      arg :first_name, (:string)
      arg :last_name, (:string)
      arg :email, non_null(:string)
      #arg :mobile, (:string)
      #arg :street1, (:string)
      #arg :street2, (:string)
      #arg :city, (:string)
      #arg :state, (:string)
      #arg :zipcode, (:string)


      resolve &Sconely.UserResolver.add_user_delivery_contact_address/2
    end

    field :save_user_delivery_contact_address, type: :registration do
      arg :user_id, :string
      arg :delivery_contact_address_id, :string
      arg :delivery_contact_address_name, :string
      arg :first_name, (:string)
      arg :last_name, (:string)
      arg :email, non_null(:string)
      #arg :mobile, (:string)
      #arg :street1, (:string)
      #arg :street2, (:string)
      #arg :city, (:string)
      #arg :state, (:string)
      #arg :zipcode, (:string)

      resolve &Sconely.UserResolver.save_user_delivery_contact_address/2
    end

    field :add_user_payment_method, type: :user_payment_method do
      arg :payment_method_name, (:string)
      arg :card_number, (:string)
      #arg :email, non_null(:string)
      #arg :mobile, (:string)
      #arg :password, (:string)

      resolve &Sconely.UserResolver.add_user_payment_method/2
    end
    
    field :save_user_payment_method, type: :user_payment_method do
      arg :first, (:string)
      arg :last, (:string)
      arg :email, non_null(:string)
      arg :mobile, (:string)
      arg :password, (:string)

      resolve &Sconely.UserResolver.save_user_payment_method/2
    end



    #order-is this still being used?
  	field :complete_order, type: :order do
  		arg :order_type, non_null(:string)
      arg :order_first_name, :string
  		arg :order_last_name, :string
  		arg :order_contact_email, :string
      arg :order_company_name, :string
  		arg :order_contact_mobile, :string
    	arg :order_delivery_address_street1, :string
    	arg :order_delivery_address_street2, :string
    	arg :order_delivery_address_city, :string
    	arg :order_delivery_address_state, :string
      arg :order_delivery_address_zipcode, :string
      arg :order_datetime_date, :string
      #arg :time, :string
    	arg :order_payment_name_on_card, :string
    	arg :order_payment_card_number, :string
    	arg :order_payment_expiry_month, :string
    	arg :order_payment_expiry_year, :string
      arg :order_payment_security_code, :string
  		#arg :cart_items, list_of(:item)
      #arg :terms
      #arg :mailing_list

  		resolve &Sconely.CompleteOrderResolver.complete_yours_order/2
  	end



    field :process_yours_social_pool_order, type: :process_yours_social_pool_order_response do
        arg :order_type, :string
        arg :save_for_later, :boolean
        arg :user_name_first, :string
        arg :user_name_last, :string
        arg :user_contact_email, :string
        arg :user_contact_mobile, :string
        arg :pool_id, :string
        arg :pool_name, :string
        arg :pool_date, :string
        arg :delivery_contact_address_name_first, :string
        arg :delivery_contact_address_name_last, :string
        arg :delivery_contact_address_contact_email, :string
        arg :delivery_contact_address_contact_mobile, :string
        arg :delivery_contact_address_company_name, :string
        #arg :order_delivery_address_street1, :string
        #arg :order_delivery_address_street2, :string
        #arg :order_delivery_address_city, :string
        #arg :order_delivery_address_state, :string
        #arg :order_delivery_address_zipcode, :string
        #arg :order_datetime_date, :string
        #arg :time, :string
        #arg :payment_name_on_card, :string
        arg :payment_method_card_number, :string
        arg :payment_method_expiry_month, :string
        arg :payment_method_expiry_year, :string
        arg :payment_method_security_code, :string
        #arg :cart_items, list_of(:item)
        #arg :terms
        #arg :mailing_list

        resolve &Sconely.YoursSocialPoolOrderResolver.complete_yours_social_pool_order/2
      end

  


	field :create_signature_order, type: :sconely_signature_order do
      arg :user_id, non_null(:string)
      #arg :event_name, :string
      #arg :code, :string
      #arg :guest_count, :string
      #arg :delivery_date, :string
      #arg :delivery_time, :string
   
      resolve &Sconely.SconelySignatureOrderResolver.create/2
  end

  field :process_signature_order, type: :sconely_signature_order do
	    arg :order_id, non_null(:string)
	    arg :event_name, :string
      arg :invited_guest_count, :string
      arg :invited_guest_message, :string
      arg :delivery_contact, :signature_order_delivery_contact_input
	    #arg :delivery_datetime, :string
	    
	    resolve &Sconely.SconelySignatureOrderResolver.process/2
	end



  #field :complete_sconely_signature_order, type: :sconely_signature_order do
  #    arg :order_id, non_null(:string)
      #arg :event_name, :string
      #arg :delivery_datetime, :string
      
  #    resolve &Sconely.SconelySignatureOrderResolver.process_order/2
  #end

  field :complete_signature_guest_response, type: :signature_guest_response do
      arg :parent_order_id, non_null(:string)
      arg :chosen_item_id, :integer
      arg :first_name, :string
      arg :last_name, :string
      arg :email, :string
      #arg :mailing_list, :boolean

      resolve &Sconely.SignatureOrderGuestResponseResolver.complete_guest_response/2
  end


	#field :save_sconely_signature_order_additional_items, type: :sconely_signature_order_additional_items do
	#    arg :order_id, non_null(:string)
	#    arg :items, list_of(:menu_item)
	#    #arg :quantity, :string
	 
	#    resolve &Sconely.OrderResolver.save_sconely_signature_order_additional_items/2
	#end


  	#field :complete_sconely_signature_order, type: :sconely_signature_order do
  	#    arg :order_id, :string
  	#    arg :amount, :integer
  	 
  	#    resolve &Sconely.OrderResolver.complete_sconely_signature_order/2
  	#end
  end
end