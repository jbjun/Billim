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

    public User save(User user) {
        if(user.getId() == null) {
            em.persist(user);
        } else {
            em.merge(user);
        }
        return user;
    }

    private int updateUserType(User user, String email){
        return em.createQuery("update User as u "+
                "set u.type = :type  where u.email = :email")
                .setParameter("email", email)
                .setParameter("type", user.getType())
                .executeUpdate();
    }

}