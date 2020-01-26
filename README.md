# Angular-Project-Architecture
> This is the Angular Project Architecture that [Pobuca](https://www.pobuca.com) uses in every Angular Project.   

```
app:.
|   app-routing.module.ts
|   app.component.html
|   app.component.ts
|   app.module.ts
|   
+---config
|       constants.ts
|       
+---core
|   |   core.module.ts
|   |   
|   +---factories
|   |       name-factory.service.ts
|   |       
|   +---guards
|   |       name.guard.ts
|   |       
|   +---interceptors
|   |       name-interceptor.ts
|   |       
|   +---services
|   |       name.service.ts
|   |       
|   \---utilities
|           name-utility.service.ts
|           
+---main
|   |   main-routing.module.ts
|   |   main.component.html
|   |   main.component.ts
|   |   main.module.ts
|   |           
|   +---components
|   |   +---name
|   |   |       name.component.html
|   |   |       name.component.ts
|   |   |       
|   |  
|   +---modules
|   |   +---name-of-lazy-load    
|   |   |       name-of-lazy-load-routing.module.ts
|   |   |       name-of-lazy-load.component.html
|   |   |       name-of-lazy-load.component.ts
|   |   |       name-of-lazy-load.module.ts    
|               
+---logon
|       logon-routing.module.ts
|       logon.component.html
|       logon.component.ts
|       logon.module.ts
|       
\---shared
    |   shared.module.ts
    |   
    +---classes
    |       name.ts
    |       
    +---components
    |   +---name
    |   |       name.component.html
    |   |       name.component.ts
    |           
    +---interfaces
    |       name.ts
    |   
    +---enums
    |       name.ts
    |      
    \---pipes
            name.pipe.ts
```      
