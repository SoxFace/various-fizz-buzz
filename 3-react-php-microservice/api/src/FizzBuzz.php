<?php


namespace App;

use LogicException;

class FizzBuzz
{
    public function calculate(int $start, int $end): array
    {
        $results = [];

        for ($i = $start; $i <= $end; $i++) {
            $output = '';

            if ($i % 3 === 0) {
                $output .= 'Fizz';
            }

            if ($i % 5 === 0) {
                $output .= 'Buzz';
            }

            if ($output === '') {
                $output = '';
            }

            $results[] = ['input' => $i, 'output' => $output];
        }

        return $results;
    }
}