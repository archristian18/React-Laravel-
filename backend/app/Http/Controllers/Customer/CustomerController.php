<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateCustomerRequest;
use App\Http\Resources\CustomerResource;
use App\Services\API\CustomerService;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;
use Validate;
use Exception;

class CustomerController extends Controller
{
    /** @var App\Services\API\CustomerService */
    protected $customerService;

    /**
     * UserController constructor.
     *
     * @param App\Services\API\CustomerService $customerService
     */

    /**
     * UserController constructor.
     *
     * @param App\Services\API\CustomerService $customerService
     */
    public function __construct(CustomerService $customerService)
    {
        $this->customerService = $customerService;
    }

    // list of customers
    public function view()
    {
        try {
            $customers = $this->customerService->getCustomer();
            $this->response['data'] = CustomerResource::collection($customers);
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }// @codeCoverageIgnoreEnd
        
        return response()->json($this->response);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     * 
     * create customer account
     */
    public function store(CreateCustomerRequest $request)
    {
        $request->validated();
        try {   
            $formData = [
                'firstname' =>  $request->getFirstname(),
                'lastname' =>  $request->getLastname(),
                'details' =>  $request->getDetails(),
            ];

            $customer = $this->customerService->create($formData);
            $this->response['data'] = CustomerResource::collection($customer);
        
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }// @codeCoverageIgnoreEnd
           return response()->json($this->response);
    }

    /**
     * Delete user.
     *
     * @param string $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        try {
            // perform user delete
            $this->response['deleted'] = $this->customerService->delete((int) $id);
        } catch (Exception $e) {
            $this->response = [
                'error' => $e->getMessage(),
                'code' => 500,
            ];
        }
        return response()->json($this->response);
    }

    public function destroy($id)
    {
        $delete = $this->customerService->destroy($id);
        $this->response['data'] = new AccountResource($delete);
        return response()->json($this->response);
    }
}
