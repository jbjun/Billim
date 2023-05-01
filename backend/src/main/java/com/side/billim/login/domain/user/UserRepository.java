package com.side.billim.login.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class UserRepository {

  private final EntityManager em;

  public Optional<User> findOneByEmail(String email){
    return em.createQuery("select u from User u where u.email = :email", User.class)
             .setParameter("email", email)
             .getResultList()
             .stream().findAny();
  }

  public String checkEmail(String email){
    return em.createQuery("select u.juso from User u where u.email = :email", String.class)
             .setParameter("email", email)
             .getSingleResult();
 }

  public String checkNickname(String nickName){
    return em.createQuery("select u.nickName from User u where u.nickName = :nickName", String.class)
        .setParameter("nickName", nickName)
        .getSingleResult();
  }

  public User save(User user) {
    if(user.getId() == null) {
      em.persist(user);
    } else {
      em.merge(user);
    }
    return user;
  }
}
