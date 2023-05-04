package com.side.billim.login.domain.user;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import java.util.List;
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

  public Optional<User> findOneById(Long id){
    return em.createQuery("select u from User u where u.id = :id", User.class)
        .setParameter("id", id)
        .getResultList()
        .stream().findAny();
  }

  public String checkEmail(String email){
    return em.createQuery("select u.juso from User u where u.email = :email", String.class)
             .setParameter("email", email)
             .getSingleResult();
 }

  public Optional<String> checkNickname(String nickName){
      List<String> nickNames = em.createQuery("select u.nickName from User u where u.nickName = :nickName", String.class)
              .setParameter("nickName", nickName)
              .getResultList();
    return nickNames.stream().findAny();
  }

    public Long checkId(String email){
        return em.createQuery("select u.id from User u where u.email = :email", Long.class)
                .setParameter("email", email)
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

  public User selectUser(Long id){
    return em.createQuery("select u from User u where u.id = :id", User.class)
        .setParameter("id", id)
        .getSingleResult();
  }
}
