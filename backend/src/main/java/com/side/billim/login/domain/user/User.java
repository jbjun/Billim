package com.side.billim.login.domain.user;

import io.swagger.annotations.ApiModelProperty;
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
  @ApiModelProperty(example = "회원 ID")
  private Long id;

  @Column(nullable = false, length = 10)
  @ApiModelProperty(example = "소셜 타입")
  private String type;

  @Column(nullable = false, length = 20)
  @ApiModelProperty(example = "회원 이름")
  private String name;

  @Column(nullable = false)
  @ApiModelProperty(example = "회원 이메일")
  private String email;

  @Enumerated(EnumType.STRING)
  @Column(nullable = false)
  @ApiModelProperty(example = "회원 권한")
  private Role role;

  @Column(length = 20)
  @ApiModelProperty(example = "회원 번호")
  private String number;

  @Column(name = "nick_name",length = 20)
  @ApiModelProperty(example = "회원 닉네임")
  private String nickName;

  @Column(length = 50)
  @ApiModelProperty(example = "회원 주소")
  private String juso;

  @Column
  @ApiModelProperty(example = "회원 프로필")
  private String originFileName;

  @Column
  @ApiModelProperty(example = "파일주소")
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
