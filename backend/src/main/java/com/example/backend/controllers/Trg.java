package com.example.backend.controllers;

import java.util.ArrayList;
import java.util.Scanner;

import static java.lang.Double.parseDouble;

public class Trg {

    public static ArrayList<String> identifikatori = new ArrayList<>();
    public static ArrayList<String> nazivi = new ArrayList<>();
    public static ArrayList<Double> cene = new ArrayList<>();

    public static Scanner scanner = new Scanner(System.in);


    public static void unosProizvoda() {
        String id;
        String naziv;
        double cena;

        System.out.print("Indetifikator:  ");
        id = scanner.nextLine();

        System.out.print("Naziv proizvoda:  ");
        naziv = scanner.nextLine();

        String cenaString;

        do {
            System.out.print("Cena:  ");
            cenaString = scanner.nextLine();
            cena = parseDouble(cenaString);
        } while (cena <= 0);

        boolean pronadjeno = false;

        for (int i = 0; i < identifikatori.size(); i++) {
            if (identifikatori.get(i).equals(id)) {
                pronadjeno = true;
                break;
            }
        }

        if (!pronadjeno) {

            identifikatori.add(id);
            nazivi.add(naziv);
            cene.add(cena);

            System.out.println("Proizvod je uspešno dodat.");

        } else {
            System.out.println("Došlo je do greške. Proizvod nije dodat.");
        }

    }

    public static void ispisProizvoda() {

    }

    public static void main(String[] args) {

    }

}