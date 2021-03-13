package domain;

public class Class {	// це певний клас, де викладачі викладають певний курс у певний час
	private int id;
	private Group dept;
	private Course course;
	private Teacher teacher;
	private LessonTime lessonTime;
	private Room room;
	
	public Class() {
		this.id = -1;
		this.dept = null;
		this.course = null;
	}
	
	public Class(int id, Group dept, Course course) {
		this.id = id;
		this.dept = dept;
		this.course = course;
	}
	

	public void setTeacher(Teacher teacher) {
		this.teacher = teacher;
	}
	public void setLessonTime(LessonTime lessonTime) {
		this.lessonTime = lessonTime;
	}
	public void setRoom(Room room) {
		this.room = room;
	}
	public int getId() {
		return id;
	}
	public Group getDept() {
		return dept;
	}
	public Course getCourse() {
		return course;
	}
	public Teacher getTeacher() {
		return teacher;
	}
	public LessonTime getLessonTime() {
		return lessonTime;
	}
	public Room getRoom() {
		return room;
	}
	public String toString() {
		return "["+dept.getName()+","+course.getNumber()+","+room.getNumber()+","+ teacher.getId()+","+ lessonTime.getId() +"]";
	}
}
