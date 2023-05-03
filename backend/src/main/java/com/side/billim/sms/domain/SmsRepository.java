package com.side.billim.sms.domain;

import com.side.billim.login.domain.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SmsRepository extends JpaRepository<User, Long> {

    @Modifying(clearAutomatically = true)
    @Query("update User u set u.athntNmbr=:athntNmbr where u.id=:id")
    void updateAthntNmbr(@Param("athntNmbr") String athntNmbr, @Param("id") long id);

    @Query("SELECT u.athntNmbr FROM User u WHERE u.id = :id")
    String selectContent(@Param("id") Long id);
    @Modifying(clearAutomatically = true)
    @Query("update User u set u.number = :number, u.nickName = :nickName, u.juso = :juso WHERE u.id = :id")
    void updateUser(@Param("id") Long id, @Param("number") String number, @Param("nickName") String nickName, @Param("juso") String juso);
}
