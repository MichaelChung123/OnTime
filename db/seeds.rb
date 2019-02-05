
puts "Seeding Data..."


lighthouse_employer = User.find_or_create_by!(
    name: "Davey",
    email: "davey@lighthouselabs.ca",
    password: "123"
)

Availability.destroy_all
Shift.destroy_all
Employee.destroy_all


lighthouse_employer.employees.create!({
    first_name: "Don",
    last_name: "Burks",
    email: "Don@lighthouselabs.ca",
    occupation: "Head Instructor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Khurram",
    last_name: "Virani",
    email: "Khurram@lighthouselabs.ca",
    occupation: "Instructor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Joel",
    last_name: "Shinness",
    email: "Joel@lighthouselabs.ca",
    occupation: "Instructor, Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Sam",
    last_name: "Meech-Ward",
    email: "Sam@lighthouselabs.ca",
    occupation: "IOS Instructor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Garret",
    last_name: "Brick",
    email: "Garret@lighthouselabs.ca",
    occupation: "Instructor, Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Rohit",
    last_name: "Dhand",
    email: "Rohit@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Catherine",
    last_name: "Li",
    email: "Catherine@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Kenny",
    last_name: "Teng",
    email: "Kenny@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Vaz",
    last_name: "Allen",
    email: "Vaz@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Shauna",
    last_name: "Griffin",
    email: "Shauna@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Rebecca",
    last_name: "Haliburton",
    email: "Rebecca@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Amy",
    last_name: "Rudolph",
    email: "Amy@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

lighthouse_employer.employees.create!({
    first_name: "Mario",
    last_name: "Viends",
    email: "Mario@lighthouselabs.ca",
    occupation: "Mentor",
    phone_number: "604-123-1234"
})

Employee.first.shifts.create!({
    day: "Friday February 1st",
    start_time: 9,
    end_time: 14,
    duration: 5,
    note: "i'm note"
})

Employee.find(2).shifts.create!({
    day: "Friday February 1st",
    start_time: 14,
    end_time: 21,
    duration: 7,
    note: "i'm second"
})

Employee.find(3).shifts.create!({
    day: "Friday February 1st",
    start_time: 12,
    end_time: 17,
    duration: 5,
    note: "12412412312312312312321"
})

Employee.find(4).shifts.create!({
    day: "Thursday January 31st",
    start_time: 15,
    end_time: 21,
    duration: 6,
    note: "djfioajflksfjlsadjflkjasfjsdlkfjsdf"
})

Employee.find(5).shifts.create!({
    day: "Thursday January 31st",
    start_time: 9,
    end_time: 11,
    duration: 2,
    note: "mentor"
})

Employee.find(1).availabilities.create!({
    day: "Monday",
    start_time: 9,
    end_time: 17
})

Employee.find(1).availabilities.create!({
    day: "Tuesday",
    start_time: 14,
    end_time: 21
})

Employee.find(1).availabilities.create!({
    day: "Wednesday",
    start_time: 12,
    end_time: 17
})

Employee.find(1).availabilities.create!({
    day: "Thursday",
    start_time: 9,
    end_time: 17
})

Employee.find(1).availabilities.create!({
    day: "Friday",
    start_time: 13,
    end_time: 21
})

Employee.find(1).availabilities.create!({
    day: "Saturday",
    start_time: 13,
    end_time: 21
})

Employee.find(1).availabilities.create!({
    day: "Sunday",
    start_time: 13,
    end_time: 21
})

# 
Employee.find(2).availabilities.create!({
    day: "Monday",
    start_time: 9,
    end_time: 17
})

Employee.find(2).availabilities.create!({
    day: "Tuesday",
    start_time: 14,
    end_time: 21
})

Employee.find(2).availabilities.create!({
    day: "Wednesday",
    start_time: 12,
    end_time: 17
})

Employee.find(2).availabilities.create!({
    day: "Thursday",
    start_time: 9,
    end_time: 17
})

Employee.find(2).availabilities.create!({
    day: "Friday",
    start_time: 13,
    end_time: 21
})

Employee.find(2).availabilities.create!({
    day: "Saturday",
    start_time: 13,
    end_time: 21
})

Employee.find(2).availabilities.create!({
    day: "Sunday",
    start_time: 13,
    end_time: 21
})


puts "Done!"




