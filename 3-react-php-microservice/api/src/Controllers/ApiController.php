<?php


namespace App\Controllers;


use App\FizzBuzz;
use Symfony\Component\HttpFoundation\JsonResponse;

class ApiController
{
    protected FizzBuzz $fizzBuzz;

    public function __construct()
    {
        $this->fizzBuzz = new FizzBuzz();
    }

    public function handle(): JsonResponse
{
    // Get request parameters (start and end) from query string
    $start = $_GET['start'] ?? 1;
    $end = $_GET['end'] ?? 15; // Default end value to 15 to match test suite

    // validate values
    $start = (int) $start;
    $end = (int) $end;

    // Calculate result using the FizzBuzz class
    $result = $this->fizzBuzz->calculate($start, $end);

    // Return the result as JSON
    return new JsonResponse($result);
}
}