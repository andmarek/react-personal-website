package main
import (
    "fmt"
    "http"
)

homeHandler(w http.ResponseWriter, req *http.Request) {
    io.WriteString(w, "home")
}

func main() {

    // Handler functions
    http.HandleFunc("/hello", homeHandler)

    // Server - port 8080, obviously.
    // Add TLS later
    log.Fatal(http.ListenAndServe(":8080", nil))
}
