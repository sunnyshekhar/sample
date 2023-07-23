package com.shekh.learn.springboot;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/demo")
public class DemoController {

    private final Logger log = LoggerFactory.getLogger(DemoController.class);
    @PostMapping("/angular")
    Data angularDemo(@RequestBody Data inputData){
        log.info("received data", inputData);
        Data outData = new Data(inputData.getKey()+"-new","Hey! there");
        return outData;
    }
}
