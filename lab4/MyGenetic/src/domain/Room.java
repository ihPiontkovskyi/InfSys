package domain;

public class Room {
	private String number;
	private int seatingCapacity; //максимальна кількість місць
	
	public Room() {
		this.number = null;
		this.seatingCapacity = -1;
	}
	
	public Room(String number, int seatingCapacity)  {
		this.number = number;
		this.seatingCapacity = seatingCapacity;
	}
	public String getNumber() {		//utility function to return room number
		return number;
	}
	public int getSeatingCapacity() {    //utility function to return room capacity
		return seatingCapacity;
	}
}
