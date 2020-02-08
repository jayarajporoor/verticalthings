//
// Created by sharingan on 07/02/20.
//

#ifndef DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_QUEUE_H
#define DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_QUEUE_H
inline void cb_write_intcust(void *container, int index, void *val) {
    int *_container = (int*)container;
    _container[index] = *((int*)val);
}

inline void* cb_read_intcust(void *container, int index) {
    int *_container = (int*)container;
    return &(_container[index]);
}
typedef struct queue {
    void *queue;
    int front;
    int back;
    int maxSize;
} cust_q;
#ifdef __cplusplus
extern "C" {
#endif
int custq_init(
    cust_q *q,
    void *container,
    int length
) {
    q->front = -1;
    q->back = -1;
    q->queue = container;
    q->maxSize = length;
    return length;
}

void custq_force_enqueue(cust_q *q, void *obj) {
    Serial.println("WRITING ")
    if (q->front == -1) {
        // empty
        q->back = 0;
        q->front = 0;
    }
    else if (q->back == q->front) {
        // full
        q->back += 1;
    }
    cb_write_intcust(q->queue, q->front, obj);
    q->front++;
    q->front %= q->maxSize;
    q->back %= q->maxSize;
}

int custq_getSize(cust_q *q) {
    if (q->front == -1)
        return 0;
    else if (q->front == q->back)
        return q->maxSize;
    else if (q->front > q->back)
        return q->front - q->back;
    else
        return q->front + (q->maxSize - q->back);
}

int get_queue_oldest(cust_q* q){
    char buf[100];
    int i = 0;
    if (custq_getSize(q) < i || custq_getSize(q) == 0) {
        Serial.println("SIZE ERROR");
        wait_ms(10);
        return NULL;
    }
    sprintf(buf, "q->back %d :: q->maxSize %d", q->back, q->maxSize);
    Serial.println(buf);
    wait_ms(10);
    int index = (q->back + i) % q->maxSize;
    sprintf(buf, "index %d", index);
    Serial.println(buf);
    wait_ms(10);
    void* ptr = cb_read_intcust(q->queue, index);
    return *((int*)ptr);
//    int* tmp = (int*)(q_oldest(p));
//    return *tmp;
}

void print_q(cust_q* q){
    char buf[100];
    sprintf(buf, "front %d back %d size %d", q->front, q->back, q->maxSize);
    Serial.println(buf);
    wait_ms(10);
}
#ifdef __cplusplus
} // end extern "C"
#endif
#endif //DEVKIT_MBEDOS5_GETSTARTED_CUSTOM_QUEUE_H
