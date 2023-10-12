<?php

use App\Controllers\ApiController;
use Symfony\Component\EventDispatcher\EventDispatcher;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Controller\ArgumentResolver;
use Symfony\Component\HttpKernel\Controller\ControllerResolver;
use Symfony\Component\HttpKernel\EventListener\RouterListener;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\Route;
use Symfony\Component\Routing\RouteCollection;

require_once __DIR__ . '/../vendor/autoload.php';

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

$request = Request::createFromGlobals();

$routes = new RouteCollection();
$routes->add('hello', new Route('/', [
    '_controller' => [ApiController::class, 'handle'],
]));

$matcher = new UrlMatcher($routes, new RequestContext());

$dispatcher = new EventDispatcher();
$dispatcher->addSubscriber(new RouterListener($matcher, new RequestStack()));

$kernel = new HttpKernel(
    $dispatcher,
    new ControllerResolver(),
    new RequestStack(),
    new ArgumentResolver()
);

$response = $kernel->handle($request)->send();

// trigger the kernel.terminate event
$kernel->terminate($request, $response);
