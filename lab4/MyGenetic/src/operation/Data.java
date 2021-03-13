package operation;
import java.util.ArrayList;
import java.util.Arrays;

import domain.*;
//data class to store all the available data
public class Data {
	private ArrayList<Room> rooms;	//list of rooms available
	private ArrayList<Teacher> teachers;	//list of instructors
	private ArrayList<Course> courses;	//list of courses
	private ArrayList<Group> groups;	//list of groups
	private ArrayList<LessonTime> lessonTimes;	//list of meeting times
	private int numberOfClasses = 10;	//total number of classes from all groups for which the time should be scheduled
	
	public Data() {
		initialize();
	}
	
	private Data initialize() {
		Room room1 = new Room("Room 255", 40);
		Room room2 = new Room("Room 306", 30);
		Room room3 = new Room("Room 39", 50);
		rooms = new ArrayList<Room>(Arrays.asList(room1, room2, room3));
		LessonTime lessonTime1 = new LessonTime("LT1", "MON 08:40 - 10:15");
		LessonTime lessonTime2 = new LessonTime("LT2", "MON 10:35 - 12:10");
		LessonTime lessonTime3 = new LessonTime("LT3", "MON 12:20 - 13:55");

		LessonTime lessonTime5 = new LessonTime("LT5", "TUE 08:40 - 10:15");
		LessonTime lessonTime6 = new LessonTime("LT6", "TUE 10:35 - 12:10");
		LessonTime lessonTime7 = new LessonTime("LT7", "TUE 12:20 - 13:55");

		LessonTime lessonTime9 = new LessonTime("LT9", "WED 08:40 - 10:15");
		LessonTime lessonTime10 = new LessonTime("LT10", "WED 10:35 - 12:10");
		LessonTime lessonTime11 = new LessonTime("LT11", "WED 12:20 - 13:55");

		LessonTime lessonTime13 = new LessonTime("LT13", "THU 08:40 - 10:15");
		LessonTime lessonTime14 = new LessonTime("LT14", "THU 10:35 - 12:10");
		LessonTime lessonTime15 = new LessonTime("LT15", "THU 12:20 - 13:55");

		LessonTime lessonTime17 = new LessonTime("LT17", "FRI 08:40 - 10:15");
		LessonTime lessonTime18 = new LessonTime("LT18", "FRI 10:35 - 12:10");
		LessonTime lessonTime19 = new LessonTime("LT19", "FRI 12:20 - 13:55");



		lessonTimes = new ArrayList<LessonTime>(Arrays.asList(lessonTime1, lessonTime2, lessonTime3,
				lessonTime5, lessonTime6, lessonTime7, lessonTime9, lessonTime10, lessonTime11,
				lessonTime13, lessonTime14, lessonTime15, lessonTime17, lessonTime18, lessonTime19));
		Teacher teacher1 = new Teacher("Т1", "Ставровський");
		Teacher teacher2 = new Teacher("Т2", "Шкільняк");
		Teacher teacher3 = new Teacher("Т3", "Омельчук");
		Teacher teacher4 = new Teacher("Т4", "Нікітченко");
		Teacher teacher5 = new Teacher("Т5", "Молодцов");
		Teacher teacher6 = new Teacher("Т6", "Волохов");
		Teacher teacher7 = new Teacher("Т7", "Кузенко");
		teachers = new ArrayList<Teacher>(Arrays.asList(teacher1, teacher2, teacher3, teacher4));
		Course course1 = new Course("C1", "Математична логіка", new ArrayList<Teacher>(Arrays.asList(teacher1, teacher4)), 25);
		Course course2 = new Course("C2", "Програмування", new ArrayList<Teacher>(Arrays.asList(teacher1, teacher3, teacher3)), 35);
		Course course3 = new Course("C3", "Бази даних", new ArrayList<Teacher>(Arrays.asList(teacher3, teacher7)), 25);
		Course course4 = new Course("C4", "Математичний аналіз", new ArrayList<Teacher>(Arrays.asList(teacher5, teacher2)), 30);
		Course course5 = new Course("C5", "Дискретна математика", new ArrayList<Teacher>(Arrays.asList(teacher2)), 35);
		Course course6 = new Course("C6", "Сис. програмування", new ArrayList<Teacher>(Arrays.asList(teacher7, teacher6)), 45);
		Course course7 = new Course("C7", "Теорія алгоритмів", new ArrayList<Teacher>(Arrays.asList(teacher2, teacher4)), 45);
		courses = new ArrayList<Course>(Arrays.asList(course1, course2, course3, course4, course5, course6, course7));
		Group group1 = new Group("ТТП-4", new ArrayList<Course>(Arrays.asList(course1, course3)));
		Group group2 = new Group("ТК", new ArrayList<Course>(Arrays.asList(course2, course4, course5)));
		Group group3 = new Group("МІ", new ArrayList<Course>(Arrays.asList(course6, course7)));
		groups = new ArrayList<Group>(Arrays.asList(group1, group2, group3));

		groups.forEach(x -> numberOfClasses += x.getCourses().size());	//store number of total number of classes from all depts
		return this;
	}
	public ArrayList<Room> getRooms() {	//return room data
		return rooms;
	}
	public ArrayList<Teacher> getTeachers() {	//return faculty data
		return teachers;
	}
	public ArrayList<Course> getCourses() {	//return course data
		return courses;
	}
	public ArrayList<Group> getGroups() {	//return groups data
		return groups;
	}
	public ArrayList<LessonTime> getLessonTimes() {	//return meeting times
		return lessonTimes;
	}
	public int getNumberOfClasses() {
		return numberOfClasses;     
	}

}
