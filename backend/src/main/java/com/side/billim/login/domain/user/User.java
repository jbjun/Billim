package com.side.billim.login.domain.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@Entity
@Table(name = "tb_social_user")
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(nullable = false, length = 10)
  private String type;

  @Column(nullable = false, length = 20)
  private String name;

  @Column(nullable = false)
  private String email;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  private Role role;

  @Column(length = 20)
  private String number;

  @Column(length = 20)
  private String nickName;

  @Column(length = 50)
  private String juso;

  @Column
  private String originFileName;

  @Column
  private String fullPath;

  @Builder
  public User(Long id, String type, String name, String email, Role role, String originFileName, String fullPath) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.email = email;
    this.role = role;
    this.originFileName = originFileName;
    this.fullPath = fullPath;
  }

  public  User update(String type, String name, String email) {
    this.type = type;
    this.name = name;
    this.email = email;

    return  this;
  }

  public void updateUser(String number, String nickName, String juso) {
    this.type = number;
    this.name = nickName;
    this.email = juso;
  }

  public void updateFile(String originFileName, String fullPath) {
    this.originFileName = originFileName;
    this.fullPath = fullPath;
  }

  public  String getRoleKey() {
    return this.role.getKey();
  }
}
