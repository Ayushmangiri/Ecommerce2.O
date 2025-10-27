package com.zosh.modal;

import jakarta.persistence.*;
import jdk.jfr.Category;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Entity
@Setter
@AllArgsConstructor
@Getter
@NoArgsConstructor
@EqualsAndHashCode
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String expire;
    private String description;
    private Integer mrpPrice;
    private Integer sellingPrice;
    private Integer discountPercent;
    private  String color;
    @ElementCollection

    private List<String> images = new ArrayList<>();

    private Integer numRating;

    @ManyToOne
    private Category category;

    @ManyToOne
    private Seller seller;
    private LocalDateTime createdAt;
}
