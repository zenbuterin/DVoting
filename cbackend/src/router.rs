use actix_web::{get, Responder, HttpResponse, web};
use serde::{Serialize}; 



#[derive(Serialize)]
pub struct Message {
    message: String,
}

#[derive(Serialize)]
pub struct Start {
    message: String,
    name: String,
    level: u64,
}


#[get("/hello")]
pub async fn hello() -> impl Responder {
    HttpResponse::Ok().json(Message { message: "Hello from Rust backend!".to_string() })
}

#[get("/start/{name}")]
pub async fn start(name: web::Path<String>) -> impl Responder {
    HttpResponse::Ok().json(Start {message: "ayo mulai perjalanan!".to_string(), name: name.into_inner(), level: 1 })
}

#[post("/signup")]
pub async fn 
