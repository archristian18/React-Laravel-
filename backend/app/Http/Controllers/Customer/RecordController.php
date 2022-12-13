<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Services\API\RecordService;
use Illuminate\Http\Request;
use App\Models\AddCustomer;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;

class RecordController extends Controller
{
    /** @var App\Services\API\CustomerService */
    protected $recordService;

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
    public function __construct(RecordService $recordService)
    {
        $this->recordService = $recordService;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $customers = $this->recordService->getCustomer();
        $this->response['data'] = CustomerResource::collection($customers);
        return response()->json($this->response);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {   
        AddCustomer::destroy($id);
        return redirect('/view')->with('success', 'customer deleted load history');
    }
        
    public function records ($id)
    {
      $list = DB::table('customers')
      ->join('add_customers', 'customers.id', '=', 'add_customers.customer_id')
      ->where('add_customers.customer_id', $id)
      ->get();

      $customers = DB::table('customers')
      ->where('id', $id)
      ->first();

      return view('customer.recordsCustomer')
      ->with(compact('list'))
      ->with(compact('customers'));
    }
}
    