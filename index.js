import { employees } from "./data";
console.log(employees);

/**
 * Codifica una función que reciba por parámetros, un arreglo de empleados,
 * y retorne un arreglo con los empleados filtrados según el parámetro dado
 *
 * Imprima el resultado en consola
 *
 */

let filterEmployees = (employees, criteria) => {
  return employees.filter(worker => {
    let compliant = true;
    for (let key in criteria) {
      compliant = compliant && worker[key] === criteria[key];
    }
    return compliant;
  });
};

console.log("EJERCICIO 1");
// NOTICE you are able to search by using any combination of attributes in the query object.
console.log(filterEmployees(employees, { age: 29, fisrtName: "Dorothy" }));

/**
 * Codifica una segunda función que reciba como parametro un arreglo y retorne 
 * el promedio de edad de los empleados del departamento de 'Marketing', 
 * redondear el valor para que no haya decimales.
 * 
 * Reutiliza las funciones necesarias
 * Imprima el resultado en consola
 * 

 */

let getTotalAgeInDepartment = (employees, department) => {
  return employees.reduce((total, worker) => {
    if (worker.department === department) {
      return (total = total + worker.age);
    } else {
      return total;
    }
  }, 0);
};

let getNumEmployees = (employees, department) => {
  let employeesInDepartment = employees.filter(worker => {
    return worker.department === department;
  });

  return employeesInDepartment.length;
};

let getAverageAge = (employees, department) => {
  return Math.round(
    getTotalAgeInDepartment(employees, department) /
      getNumEmployees(employees, department)
  );
};

console.log("EJERCICIO 2");
console.log(getAverageAge(employees, "Marketing"));

/**
 * Codifica una función que reciba por parámetro un arreglo de "employees" del departamento
 * de "Development" y retorne un nuevo arreglo con los "employees" con la edad aumentada a 1
 *
 * Reutiliza las funciones necesarias
 * Imprime el resultado en consola
 *
 */

let getEmployeesFromDepartment = (employees, department) => {
  return employees.filter(worker => {
    return worker.department === department;
  });
};

let mutateEmployeesFromDepartment = (employees, department) => {
  return getEmployeesFromDepartment(employees, department).map(worker => {
    let age = worker.age;
    return { ...worker, ...{ age: age + 1 } };
  });
};

console.log("EJERCICIO 3");
console.log(mutateEmployeesFromDepartment(employees, "Development"));

/**
 * Crea una función que reciba por parametro el objeto employee y cambie el departamento a "Development"
 *
 */
let employee = {
  fisrtName: "Maria",
  lastName: "Gonzalez",
  age: 32,
  department: "Marketing"
};

let changeDepartment = (employees, employee) => {
  let newEmployees = [...employees]; // Clone the original array of employees
  newEmployees.forEach(worker => {
    if (
      worker.fisrtName === employee.fisrtName &&
      worker.lastName === employee.lastName &&
      worker.age === employee.age &&
      worker.department === employee.department
    ) {
      worker.department = "Development";
    }
  });

  return newEmployees;
};

console.log("EJERCICIO 4");
console.log(changeDepartment(employees, employee));

/**
 *
 * Crea una función en la cual solo se reciba un parámetro y se puedan sumar hasta 3 números
 *
 * Escribe aquí debajo como se llama a este concepto
 *
 */

console.log("EJERCICIO 5");
function buildSum(x){
  return function(y){
    return function(z) {
      return x + y + z;
    }
  };
}

// Este concepto se conoce como "Closure"
console.log(buildSum(1)(2)(3));




